//import Component
//state
//render()return():

//form + onChange + value - берем то что ввел пользователь
                //onSubmit добавляем метод, чтобы страница не перегружалась
//сама строка Input onChange :
                //onChangeEvent(event)  {this.setState( { userInput : event } ) }
//onClick ADD - добавляем в массив
                //addItem
                //вводим let listArray =
                //listArry.push(input) - добавляем в конец массива то, что ввел польхователь
                //и очищаем строку
//ul c li - это наш массив испольщуем map() чтобы формировать его.
                //в map() это метод JS который позволяет создавать новый массив и and manipulate or change data items
// li onClick - вызыввем функцию, которая :
                 // при Click на Li меняет класс на другой. С методом toggle() который позвоябяет при клике сменять состояние
                //обязательно добавляем каждому li уникальный key
//добавляем книпку УДАЛИТЬ ВСЕ onClick
                //delete приравниваем массив к 0 или []

import { Component } from "react";

export class Todos extends Component{
    /*constructor(props){
        super(props);*/

    //this.markDone = this.markDone.bind(this);

    state = {
        userInput: "", // "" означает, что мы готовы принимать от пользователя что-то и изначально там ничего нет
        todos: []
    }

    //1. метод от строки INPUT
    onChangeEventInput(event){ //наш метод, который срабатывает на изменение(EVENT) в строке INPUT
        this.setState( { userInput : event } ) // теперь каждое новое состояние IMPUT равно тому, что ввел польхователь (EVENT)
        //console.log(event) //проверяем наш результат
    }

    // 2. метод от FORM от перезагрузки страницы от ENTER
    onFormSubmit(e){
        e.preventDefault()
    }


    // 3. метод от кнопки ADD - добавляется то, что взяли от пользователя в "хранилище"=массив
    addToDos(input){
        if (input === ""){
            alert("Please enter to-do's")
        }
        else {
            let itemStorage = this.state.todos; //указываем с чем работаем-  хранидице-массив
            itemStorage.push(input) //добавляем в конец массива то, что пишет пользователь
            this.setState( { todos : itemStorage, userInput: "" } ) 
            // прописываем новое состояние setState и очищаем строку input после добавления
        }
    }

    //4. метод при клике дело становится зачеркнутым
    doneToDos(i){
        const li = i.target; //как только клик по li, то...        
        li.classList.toggle("crossed") //добавляем этот класс туда, где i.target

    }
    /*markDone(){
        if(this.state.backgroundColor === ""){
            this.setState({ backgroundColor : 'rgb(144,238,144, 0.5)'  });
        }
        else {
            this.setState({backgroundColor: ""})
        }
    }
    */

    //6. Удаляем только 1 элемент
    deleteItem(index){
        const todos = [...this.state.todos];
        const updateTodos = todos.filter( (value , key) =>{ 
            return index!==key
        } );
        this.setState( {todos : updateTodos })
    }

    //5. Удаляем весь массив 
    deleteToDos(){
        let itemStorage = this.state.todos; //указываем с чем работаем-  хранидице-массив
        itemStorage = [] //опустошаем массив полностью
        this.setState( { todos : itemStorage } ) //устанавливаем новое состояние
    }

    render(){
        //1. INPUT -> onChange -> (event) -> =onChangeEventInput()
        //2. FORM -> onSubmit=onFormSubmit()
        //3. button ADD -> onClick -> () -> addItem()
        //4. UL - манипуляции с li при помощи map() 
            //LI -> onClick -> doneToDos()
        //5. button DELETE -> onClick -> () -> deleteToDos()
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
                            //формирую массив с уникальными элементами, чтобы ими манипулировать
                            //уникальность обеспечивается за счет key={} - string attribute
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
