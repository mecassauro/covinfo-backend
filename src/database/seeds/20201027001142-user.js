module.exports = {
  up: async (QueryInterface) => {
    await QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Ronaldo de Asis',
          user_type: 'COMMUNITY_PERSON',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Raimundo Cardoso Santos',
          user_type: 'COMMUNITY_PERSON',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Geneci Figueroa',
          user_type: 'COMMUNITY_PERSON',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Ribery Machado',
          user_type: 'COMMUNITY_PERSON',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Murilo Roberto',
          user_type: 'COMMUNITY_PERSON',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
