// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars

module.exports = function (options = {}) {
  return function (context) {

    context.params.sequelize = {
      include: [
        { 
          model: context.app.services.comments.Model, 
          //as: 'posts', 
          order: [], 
          //attributes: ['id', 'title'], 
          //paranoid: true, 
        }, 
        { 
          model: context.app.services.tags.Model, 
          order: [],
        }, 
        { 
          model: context.app.services.categories.Model, 
          order: [], 
        }
      ],
      raw: false,
    }
  };
};
