import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import { OnOff } from './components/OnOff/OnOff';
import {Rating} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';

function App() {

    return (
        <div className={'App'}>

            {/*<PageTitle title={'This is APP component'}/>
            <PageTitle title={'Users'}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
           {/* <OnOff />*/}
            <OnOff />

            <UncontrolledAccordion titleValue={'Menu'}/>
            <Accordion titleValue={'Users'} collapsed={false}/>

           {/* <UncontrolledAccordion titleValue={'Users'}/>*/}
            <UncontrolledRating />
            <Rating value={3}/>




        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {

    console.log('PageTitle rendering')
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
