import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { ServiceProviderType } from './commons/ServiceProviderType';
import { FoodServiceFactory } from './services/food/FoodServiceFactory';
import { FoodService } from './services/food/FoodService';
import { ShoppingService } from './services/shopping/ShoppingService';
import { ShoppingServiceFactory } from './services/shopping/ShoppingServiceFactory';
import { HomeView } from './views/HomeView';
import { PantryView } from './views/PantryView';
import { ShoppingView } from './views/ShoppingView';
import { PlanningServiceFactory } from './services/planning/PlanningServiceFactory';
import { PlanningService } from './services/planning/PlanningService';

import './App.css';
import { PlanningView } from './views/PlanningView';
import { TodoListView } from './views/TodoListView';
import { MealView } from './views/MealView';
import { CookingRecipeView } from './views/CookingRecipeView';

function App() {
  const SERVICE_PROVIDER_TYPE: ServiceProviderType = ServiceProviderType.MOCK;

  const FOOD_SERVICE: FoodService = FoodServiceFactory.create(SERVICE_PROVIDER_TYPE);
  const SHIPPING_SERVICE: ShoppingService = ShoppingServiceFactory.create(SERVICE_PROVIDER_TYPE);
  const PLANNING_SERVICE: PlanningService = PlanningServiceFactory.create(SERVICE_PROVIDER_TYPE);

  return (
    <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<HomeView />}/>
        <Route path="todo" element={<TodoListView />}/>
        <Route path="pantry" element={<PantryView foodService={FOOD_SERVICE} shoppingService={SHIPPING_SERVICE} />}/>
        <Route path="shopping" element={<ShoppingView shoppingService={SHIPPING_SERVICE}/>}/>
        <Route path="planning" element={<PlanningView planningService={PLANNING_SERVICE}/>}/>
        <Route path="meal" element={<MealView />}/>
        <Route path="cooking-recipe" element={<CookingRecipeView />}/>
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
