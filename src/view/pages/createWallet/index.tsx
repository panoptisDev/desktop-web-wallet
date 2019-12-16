import React, { useState } from 'react';
import { CreateWalletCard } from '../../components/cards';
import { Input } from '../../components/forms';
import {
  FormCheckedIcon,
  FormUnCheckedIcon,
} from 'src/view/components/svgIcons';
import styles from './styles.module.scss';
export default () => {
  const [checked, setChecked] = useState(false);
  function handleCheckBox(toggle) {
    setChecked(toggle);
  }
  return (
    <div>
      <CreateWalletCard>
        <h3 className="font-weight-semi-bold">
          1<span className="opacity-3 mr-3">/2</span> Create a keystore file and
          password
        </h3>
        <Input label="Set a new password" />
        <Input label="Re-enter password" />
        <div className={styles.checkField}>
          <div className={styles.checkBoxWrapper}>
            <button
              className={styles.checkBox}
              onClick={() => handleCheckBox(!checked)}
            >
              {checked ? <FormCheckedIcon /> : <FormUnCheckedIcon />}
            </button>
          </div>
          <p>
            I made a backup of the keystore file and saved the password in a
            safe place.
            <br />I understand that{' '}
            <a href="#" target="_blank">
              I will need the password and the keystore file to access my
              wallet.
            </a>
          </p>
        </div>
      </CreateWalletCard>
    </div>
  );
};
