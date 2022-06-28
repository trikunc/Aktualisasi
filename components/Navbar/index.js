import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import useWindowSize from '../../utils/valueSize'
import yogyaIcon from '../../public/assets/icons/icon_yogyakarta.png'

function Header() {

  const size = useWindowSize();
  console.log(size);
  const { height, width } = size;
  const valueSize = height < width ? height : width;

  return (
    <div
      className={styles.Header}
      style={
        { backgroundColor: 'rgba(255, 255, 255, 0.5)' }
      }
    >
      <div className={styles.header__logo}>
        <Link href="/" passHref>
          <div
            className={styles.header__logoImg}
            style={{ width: valueSize * 0.1 }}
          >
            <Image src={yogyaIcon} alt="jogja icon" />
          </div>
        </Link>
      </div>
      <div className={styles.header__links}>
        <div
          className={styles.header__links}
          style={{ fontSize: valueSize * 0.023 }}
        >
          <Link className={styles.header__nav} href="/">
            ABOUT
          </Link>
          <Link className={styles.header__nav} href="/controlling">
            KONTROL
          </Link>
          <Link className={styles.header__nav} href="/kejuruan">
            KEJURUAN
          </Link>
          <Link className={styles.header__nav} href="/auth/login">
            LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
