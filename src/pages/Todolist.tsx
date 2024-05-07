import React, { useState } from 'react';
import { IonRouterLink, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCheckbox, IonInput, IonButton, IonIcon } from '@ionic/react';
import { trashOutline, arrowBackCircle } from 'ionicons/icons'; // Added IonIcon import for delete icon
interface ToDoItem {
  id: number;
  text: string;
  completed: boolean;
}

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<ToDoItem[]>([]);
  const [newTodoText, setNewTodoText] = useState<string>('');

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      const newTodo: ToDoItem = {
        id: Date.now(),
        text: newTodoText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoText('');
    }
  };

  const handleToggleTodo = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ToDo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonRouterLink href="/Home">
            <IonIcon id="arrow" aria-hidden="true" icon={arrowBackCircle} />
                </IonRouterLink>
      <IonContent>
        
        <IonItem>
          <IonInput placeholder="Enter a new todo" value={newTodoText} onIonChange={(e) => setNewTodoText(e.detail.value!)} />
          <IonButton slot="end" onClick={handleAddTodo}>Add</IonButton>
        </IonItem>
        <IonList>
          {todos.map(todo => (
            <IonItem key={todo.id}>
              <IonCheckbox slot="start" checked={todo.completed} onIonChange={() => handleToggleTodo(todo.id)} />
              <IonLabel>{todo.text}</IonLabel>
              <IonButton fill="clear" color="danger" slot="end" onClick={() => handleDeleteTodo(todo.id)}>
                <IonIcon icon={trashOutline} />
              </IonButton>
            </IonItem>
          ))}
        </IonList>

      

      </IonContent>
    </IonPage>
  );
};

export default ToDoList;