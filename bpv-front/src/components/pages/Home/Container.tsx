import { Button } from "@mui/material";
import { useEffect } from "react";

type Props = {
    test: number;
    setTest: (arg0:number) => void;
}

const HomeContainer = ({test, setTest}: Props) => {

    useEffect(() => {
        console.log(test);
    }, [test])

    const Component = () => (
        <>{test}<Button onClick={() => setTest(test+1)}>{test}</Button></>
    )

    return <Component></Component>;
}

export default HomeContainer