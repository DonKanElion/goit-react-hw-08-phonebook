import s from './Footer.module.css';
// import icons from './icons.svg';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer_container}>
        <div className={s.footer_contacts_wrapper}>
          <p className={s.title}>Contact Me:</p>
          <ul className={s.contacts}>
            <li className={s.contacts_item}>
              <a
                className={s.contacts_item_link}
                // className={s.contacts_item_text}
                href="mailto:anton.paliienko@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Email
              </a>
            </li>
            <li className={s.contacts_item}>
              <a
                className={s.contacts_item_link}
                href="https://t.me/PaliienkoAnton"
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
            </li>
            <li className={s.contacts_item}>
              <a
                a
                className={s.contacts_item_link}
                href=" http://www.linkedin.com/in/anton-paliienko"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className={s.contacts_item}>
              <a
                className={s.contacts_item_link}
                href=" https://github.com/DonKanElion"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <p className={s.footer_rigths}>
          © 2023 | All Rights Reserved | Developed by Anton Paliienko
        </p>
      </div>
    </footer>
  );
};
