import styles from "../styles/Login.module.css";
import Image from "next/image";
import icon from "./Images/metamask.gif"
import {useMoralis} from "react-moralis"
function Login() {
    const {authenticate, authError} = useMoralis();
    return (
        <div className ={styles.login_container}>
            <div className = {styles.login_card}>
                <div>
                    <Image src={icon} width={200} height={200}/>
                </div>
                <div className = {styles.login_button}>
                    {
                        authError && (
                            <p className={styles.error}>
                                {authError.name}
                              
                                {authError.message}
                            </p>
                        )
                    }
                    <button onClick={authenticate}>Login with metamask</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
