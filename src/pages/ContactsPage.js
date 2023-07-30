import { Helmet } from 'react-helmet';
import ContactsEditor from 'components/ContactsEditor/ContactsEditor';

const Contacts = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <ContactsEditor />
    </div>
  );
};

export default Contacts;
