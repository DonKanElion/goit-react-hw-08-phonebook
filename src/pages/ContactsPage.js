import { Helmet } from 'react-helmet';
import ContactsEditor from 'components/ContactsEditor/ContactsEditor';
// import { ContactEditModal } from 'components/ContactEditModal/ContactEditModal';

const Contacts = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <ContactsEditor />
      {/* <ContactEditModal /> */}
    </div>
  );
};

export default Contacts;
