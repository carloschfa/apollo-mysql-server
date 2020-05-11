module.exports.createGroupSchema = function (gql) {
  return GroupSchema = gql`
    type Group {
      objectId: String!
      chatId:  String!
      name:  String!
      ownerId:  String!
      isDeleted: Boolean!
      createdAt: Int!
      updatedAt: Int!
    }

    extend type Subscription {
      group(chatId: String!): Group!
    }

    extend type Query {
      groups(chatId: String!): [Group]
    }

    extend type Mutation {
      insertGroup(objectId: String!, chatId:  String!, name:  String!, ownerId:  String!, isDeleted: Boolean!, createdAt: Int!, updatedAt: Int!): Group!
      updateGroup(objectId: String!, chatId:  String!, name:  String!, ownerId:  String!, isDeleted: Boolean!, createdAt: Int!, updatedAt: Int!): Group!
    }
  `
}

const GROUP_CHANGE = 'GROUP_CHANGE';

module.exports.createGroupResolver = function (database, Operation, withFilter, pubsub) {
  return resolver = {
    Subscription: {
      group: {
        subscribe: withFilter(
          () => pubsub.asyncIterator(GROUP_CHANGE),
          (payload, args) => args.chatId == payload.chatId
        )
      }
    },
    Query: {
      groups: async(root, args) => {
        let filter = { 
          chatId: { 
            [Operation.eq]: args.chatId
          }
        }
        return await database.models.Group.findAll({ where: filter });
      }
    },
    Mutation: {
      insertGroup: async(root, args, context, info) => {
        let group = await database.models.Group.create(args);
        pubsub.publish(GROUP_CHANGE, { 
          chatId: args.chatId,
          group: group.dataValues
        });
        return group;
      },
      updateGroup: async(root, args, context, info) => {
        const filter = { where: { chatId: args.chatId } }
        await database.models.Group.update(args, filter)
          .then(() => {
            pubsub.publish(GROUP_CHANGE, {
              chatId: args.chatId,
              group: args
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