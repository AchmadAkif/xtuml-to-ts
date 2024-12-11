const point1 = content => {
  const subsystemNames = [];
  try {
    if (content['type'] == 'subsystem') {
      const subsystemProperty = content['sub_name'];

      if (subsystemProperty || subsystemProperty != null) {
        const subsystemName = subsystemProperty.toString();

        if (subsystemNames.includes(subsystemName)) {
          throw new Error(
            `Syntax error 1: There is a subsystem with the same name: ${subsystemName}. Ensure that all subsystems have unique names.`
          );
        }

        subsystemNames.push(subsystemName);
      } else {
        throw new Error(
          'Syntax error 1: Property "sub_name" not found or is empty.'
        );
      }
      console.log('point1 passed');
      return true;
    }
  } catch (error) {
    console.error(error.message);
  }
};

export { point1 };
