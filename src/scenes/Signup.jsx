import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { Form, Button, Input } from "antd"

const firebaseConfig = {
    apiKey: "AIzaSyC6lTbml13AlbBBrKJ9u2svxAmbC9PCM3o",
    authDomain: "simple-login-br.firebaseapp.com",
    projectId: "simple-login-br",
    storageBucket: "simple-login-br.appspot.com",
    messagingSenderId: "658748348044",
    appId: "1:658748348044:web:ca4e7c041ef01e3d1d0da9"
  };

export default function Signup({ setUser, setIsUser }) {
    const handleSubmit = async ({email, password }) => {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app)
        const _user = await createUserWithEmailAndPassword(auth, email, password)
            .catch(alert)
            console.log(_user)
       setUser(_user.user)
    }
    return(
        <section>
            <h1>Sign Up</h1>
            <Form onFinish={handleSubmit} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                <Form.Item label="Email" name="email">
                    <Input type="email" />
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Sign Up</Button>
                </Form.Item>
            </Form>
            <p>Already a user? <Button onClick={() => setIsUser(true)}>Log In</Button></p>
        </section>
    )
}