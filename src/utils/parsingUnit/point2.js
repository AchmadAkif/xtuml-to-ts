const point2 = content => {
  try {
    const modelArray = content['model'];
    const classIdsInClass = [];
    const classIdsInAssociationClass = [];

    if (modelArray) {
      modelArray.forEach(item => {
        const itemType = item.type;

        if (itemType == 'class') {
          const classIdProperty = item['class_id'];
          const classAttributes = item['attributes'];

          if (classIdProperty != null) {
            const classId = classIdProperty.toString();
            classIdsInClass.push(classId);

            if (classAttributes == null) {
              throw new Error(
                `Syntax error 2: Class ${classId} does not have attributes`
              );
            }
          }
        } else if (itemType == 'association') {
          const classArrayProperty = item['class'];

          if (classArrayProperty || classArrayProperty != null) {
            classArrayProperty.forEach(item => {
              const classIdProperty = item['class_id'];

              if (classIdProperty || classIdProperty != null) {
                const classId = classIdProperty.toString();
                classIdsInAssociationClass.push(classId);
              }
            });
          }

          const associationClassModel = item?.model;
          const associationClassType = associationClassModel?.type;

          if (associationClassType == 'association_class') {
            const classIdProperty = associationClassModel['class_id'];

            if (classIdProperty != null) {
              const classId = classIdProperty.toString();
              classIdsInClass.push(classId);
              classIdsInAssociationClass.push(classId);

              const attributesArray = associationClassModel['attributes'];
              if (!attributesArray || attributesArray == null) {
                throw new Error(
                  `Syntax error 2: Class ${classId} does not have attributes`
                );
              }
            }
          }
        }
      });
    }
    console.log('point2 passed');
  } catch (error) {
    console.error(error.message);
  }
};

export { point2 };
