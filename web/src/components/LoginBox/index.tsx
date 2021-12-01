import { VscGithubInverted } from "react-icons/vsc"

import styles from "./styles.module.scss";

export function LoginBox() {

    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=d9ef69cd2acb9cd8e224`;

    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className={styles.signInWithGithub}>
                <VscGithubInverted size="24" />
                Entrar com github
            </a>
        </div>
    )
}