import { useSession, signIn, signOut } from "next-auth/react";
import styles from "@/styles/Home.module.css";
import Image from 'next/image';

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.profileImg}>
            <Image src={session?.user?.image as string} width={70} height={70} alt={session?.user?.image as string}></Image>
          </div>
          Signed in as {session?.user?.name} <br />
          <button className={styles.button} onClick={() => signOut()}>Sign out</button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        Not signed in <br />
        <button className={styles.button} onClick={() => signIn()}>Sign in</button>
      </div>
    </div>
  );
}