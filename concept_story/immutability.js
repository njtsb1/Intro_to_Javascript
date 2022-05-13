(() => {
  const user = {
    name: "Nivaldo",
    lastName: "dos Santos Beirão"
  };

  function getUserWithFullName(user) {
    return {
      ...user,
      fullName: `${user.name} ${user.lastName}`
    };
  }

  const userWithFullName = getUserWithFullName(user);
})();
