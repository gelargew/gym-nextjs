import { MainContainer } from "../components/commons";
import Layout from "../components/Layout";
import LotOfStuff from "../tutorial/Instances";
import SphereMaterial from "../tutorial/Shadows";

export default function Demos() {
    return (
        <Layout>
            <MainContainer>
                <LotOfStuff />
            </MainContainer>
        </Layout>
    
    )
}