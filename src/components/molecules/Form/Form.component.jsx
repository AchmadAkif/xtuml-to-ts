import { TextboxComponent } from '../../atoms';
import { ButtonComponent } from '../../atoms';

const FormComponent = ({ type, buttonText, fileContent }) => {
  return (
    <div className='w-full flex flex-col'>
      <TextboxComponent type={type} fileContent={fileContent} />
      <ButtonComponent items={buttonText} />
    </div>
  );
};

export default FormComponent;