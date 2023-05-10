import Image from 'next/image'
import {Inter} from 'next/font/google'
import axios from "axios";

const inter = Inter({subsets: ['latin']})

export default function home({users}) {
    return (
        <>
            <h1>hello</h1>
            <table>
                <thead>
                <tr>
                    <td>Date</td>
                    <td>Confirmed</td>
                    <td>Active</td>
                    <td>Recovered</td>
                    <td>Deaths</td>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user) => (
                        <tr key={user}>
                            <td>{user.Date}</td>
                            <td>{user.Confirmed}</td>
                            <td>{user.Active}</td>
                            <td>{user.Recovered}</td>
                            <td>{user.Deaths}</td>
                        </tr>))
                }

                </tbody>
            </table>
        </>

    )
}
export const getStaticProps = async () => {
    const response = await axios.get('https://api.covid19api.com/total/country/vietnam')
    return {
        props: {
            users: response.data
        }
    }
}