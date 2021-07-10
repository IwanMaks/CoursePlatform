import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Input} from "../components";
import {Button} from "../components/Button/Button";

export default function Home() {
  return (
    <>
        <Input placeholder='This is Placeholder' />
        <Button appearance={'primary'} icon={'plus'}>Confirm payment</Button>
        <Button appearance={'primary'} icon={'plus'} minimized={true}/>
        <Button appearance={'primary'} icon={'none'}>Confirm payment</Button>
        <Button appearance={'ghost'} icon={'plus'}>Confirm payment</Button>
        <Button appearance={'ghost'} icon={'plus'} minimized={true}/>
        <Button appearance={'ghost'} icon={'none'}>Confirm payment</Button>
    </>
  )
}
