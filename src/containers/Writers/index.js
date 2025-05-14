import Writer from "./components/writer";

const writers = [
    {name: 'john', lastName:'doe', id:1},
    {name: 'jack', lastName:'new', id:2},
    {name: 'frank', lastName:'sting', id:3},
    {name: 'bob', lastName:'dowman', id:4},
]

const Writers = (props) => {


    return(
        <div>
            {/* <Writer {...writers[0]}/>
            <Writer {...writers[1]}/>
            <Writer {...writers[2]}/>
            <Writer {...writers[3]}/>
            <Writer {...writers[4]}/> */}

            {writers.map((item, index) => {
                return (<Writer {...item} key={item.id}/>)
            })}

        </div>
    )

}
export default Writers;