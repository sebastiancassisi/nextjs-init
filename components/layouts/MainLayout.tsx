import styles from './MainLayout.module.css';
import Head from 'next/head';
import { NavBar } from '../NavBar';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Page</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
