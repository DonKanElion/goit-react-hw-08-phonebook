import { Helmet } from 'react-helmet';
import ContactsEditor from 'components/ContactsEditor/ContactsEditor';

const Contacts = () => {
  return (
    <div>
      <Helmet>
        <h3>Hello contacts Page </h3>
      </Helmet>
      <ContactsEditor />
    </div>
  );
};

export default Contacts;
