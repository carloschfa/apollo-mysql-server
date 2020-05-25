module.exports.createPersonSchema = function (gql) {
  return PersonSchema = gql`
    type Person {
      objectId: String!
      email: String!
      phone: String!
      firstname: String!
      lastname: String!
      fullname: String!
      country: String!
      location: String!
      pictureAt: Int!
      status: String!
      keepMedia: Int!
      networkPhoto: Int!
      networkVideo: Int!
      networkAudio: Int!
      wallpaper: String!
      loginMethod: String!
      oneSignalId: String!
      lastActive: Int!
      lastTerminate: Int!
      createdAt: Int!
      updatedAt: Int!
    }

    extend type Subscription {
      person(updatedAt: Int!): Person!
    }

    extend type Query {
      persons(updatedAt: Int, userId: String): [Person]
    }

    extend type Mutation {
      insertPerson(objectId: String!, email: String!, phone: String!, firstname: String!, lastname: String!, fullname: String!, country: String!, location: String!, pictureAt: Int!, status: String!, keepMedia: Int!, networkPhoto: Int!, networkVideo: Int!, networkAudio: Int!, wallpaper: String!, loginMethod: String!, oneSignalId: String!, lastActive: Int!, lastTerminate: Int!, createdAt: Int!, updatedAt: Int!): Person!
      updatePerson(objectId: String!, email: String!, phone: String!, firstname: String!, lastname: String!, fullname: String!, country: String!, location: String!, pictureAt: Int!, status: String!, keepMedia: Int!, networkPhoto: Int!, networkVideo: Int!, networkAudio: Int!, wallpaper: String!, loginMethod: String!, oneSignalId: String!, lastActive: Int!, lastTerminate: Int!, createdAt: Int!, updatedAt: Int!): Person!
    }
  `
}

const PERSON_CHANGE = 'PERSON_CHANGE';

module.exports.createPersonResolver = function (database, Operation, withFilter, pubsub) {
  return resolver = {
    Subscription: {
      person: {
        subscribe: withFilter(
          () => pubsub.asyncIterator(PERSON_CHANGE),
          (payload, args) => { 
            return payload.updatedAt > args.updatedAt }
        )
      }
    },
    Query: {
      persons: async(root, args) => {
        let filter  = { }
        if (args.updatedAt) {
          filter = { 
            updatedAt: { 
              [Operation.gt]: args.updatedAt
            }
          }
        } else if (args.userId) {
          filter = { 
            userId: { 
              [Operation.eq]: args.userId
            }
          }
        } else if ((args.updatedAt) && (args.userId)) {
          filter = { 
            updatedAt: { 
              [Operation.gt]: args.updatedAt
            },
            userId: { 
              [Operation.eq]: args.userId
            }
          }
        }
        return await database.models.Person.findAll({ where: filter });
      }
    },
    Mutation: {
      insertPerson: async(root, args, context, info) => {
        let person = await database.models.Person.create(args);
        pubsub.publish(PERSON_CHANGE, {
          updatedAt: args.updatedAt,
          person: person.dataValues
        });
        return person;
      },
      updatePerson: async(root, args, context, info) => {
        const filter = { where: { email: args.email } }
        await database.models.Person.update(args, filter)
          .then(() => {
            pubsub.publish(PERSON_CHANGE, {
              updatedAt: args.updatedAt,
              person: args
            });
          })
          .catch((error) => {
            console.log('error', error)
          });
        return args;
      }
    }
  }
}