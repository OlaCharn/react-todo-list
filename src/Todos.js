import { Component } from "react";

export class Todos extends Component{

    state = {
        userInput: "", 
        todos: []
    }

    //1.  INPUT
    onChangeEventInput(event){ 
        this.setState( { userInput : event } ) 
    }

    // 2.  FORM submit ENTER
    onFormSubmit(e){
        e.preventDefault()
    }


    // 3. ADD button
    addToDos(input){
        if (input === ""){
            alert("Please enter to-do's")
        }
        else {
            let itemStorage = this.state.todos; 
            itemStorage.push(input) //add to array
            this.setState( { todos : itemStorage, userInput: "" } ) 
            
        }
    }

    //4. click=>background change
    doneToDos(i){
        const li = i.target;       
        li.classList.toggle("crossed") 

    }

    //6. DELETE button
    deleteItem(index){
        const todos = [...this.state.todos];
        const updateTodos = todos.filter( (value , key) =>{ 
            return index!==key
        } );
        this.setState( {todos : updateTodos })
    }

    //5. CLEAR LIST button
    deleteToDos(){
        let itemStorage = this.state.todos; 
        itemStorage = [] 
        this.setState( { todos : itemStorage } ) 
    }

    render(){
        //1. INPUT -> onChange -> (event) -> =onChangeEventInput()
        //2. FORM -> onSubmit=onFormSubmit()
        //3. button ADD -> onClick -> () -> addItem()
        //4. UL - манипуляции с li при помощи map() 
            //LI -> onClick -> doneToDos()
        //5. button DELETE -> onClick -> () -> deleteItem(index)
        //6. button CLEAR LIST -> onClick -> () -> deleteToDos()

        return(
            <div className='container'>
                <form onSubmit={this.onFormSubmit}>

                    <div>
                    <input 
                        className="inputBlock"
                        type = "text"
                        placeholder="add item ..."
                        onChange={ (event) => {this.onChangeEventInput(event.target.value) } }
                        value = { this.state.userInput}
                        />
                    </div>    

                    <div>
                        <button className="buttonADD" onClick={ ()=> this.addToDos(this.state.userInput) } >ADD</button>
                    </div>

                    <div>
                        <ul>
                            { this.state.todos.map( (item,index)  => ( 
                            //make an array with unique identifyer key={} - string attribute
                            
                            <div key={ index }>
                            <li className="liItem" onClick={ this.doneToDos  } > 
                                {item}

                                <button className="buttonDELETE" onClick={ ()=> {this.deleteItem(index) } }> DELETE  </button>
                            </li>
                            </div>
                            ))} 
                        </ul>
                    </div>

                    <div>
                        <button className="buttonDELETE" onClick={ () => {this.deleteToDos()}}>CLEAR LIST</button>
                    </div>


                </form>
            </div>

        )
    }
}
