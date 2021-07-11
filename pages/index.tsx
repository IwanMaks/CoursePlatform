import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Input} from "../components";
import {Button} from "../components/Button/Button";
import {Tab} from "../components/Tab/Tab";

export default function Home() {
  return (
    <>
        <section>
            <Input placeholder='This is Placeholder' />
            <Button appearance={'primary'} icon={'plus'}>Confirm payment</Button>
            <Button appearance={'primary'} icon={'plus'} iconOnly={true}/>
            <Button appearance={'primary'} icon={'none'}>Confirm payment</Button>
            <Button appearance={'ghost'} icon={'plus'}>Confirm payment</Button>
            <Button appearance={'ghost'} icon={'plus'} iconOnly={true}/>
            <Button appearance={'ghost'} icon={'none'}>Confirm payment</Button>
            <Tab state={true}>Hot Dishes</Tab>
            <Tab state={false}>To go</Tab>
        </section>
    </>
  )
}
