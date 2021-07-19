import {Input, Button, Tab, SearchInput, Dropdown, SummaryCard, DishCard} from "../components";
import {StatusTab} from "../components/StatusTab/StatusTab";
import {OrderRow} from "../components/OrderRow/OrderRow";

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
            <SearchInput placeholder='This is Placeholder' />
            <Dropdown />
            <SummaryCard />
            <DishCard />
            <StatusTab state={'pending'}/>
            <StatusTab state={'preparing'}/>
            <StatusTab state={'completed'}/>
            <OrderRow userID={'user1'} userName={'Vladimir Putin'} menuOrder={'Spicy seasoned seafood noodles'} totalPrice={125}/>
        </section>
    </>
  )
}
