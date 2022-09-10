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
import { HomeView } from './views/home/HomeView';
import { PantryView } from './views/pantry/PantryView';
import { ShoppingView } from './views/shopping/ShoppingView';
import { PlanningServiceFactory } from './services/planning/PlanningServiceFactory';
import { PlanningService } from './services/planning/PlanningService';

import Diversity1Icon from '@mui/icons-material/Diversity1';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import { PlanningView } from './views/planning/PlanningView';
import { TodoListView } from './views/todo/TodoListView';
import { MealView } from './views/meal/MealView';
import { CookingRecipeView } from './views/cooking-recipe/CookingRecipeView';
import { FamillyView } from './views/familly/FamillyView';

import 'materialize-css';
import './App.css';
import { FoodCreatorView } from './views/pantry/FoodCreatorView';

function App() {
  const SERVICE_PROVIDER_TYPE: ServiceProviderType = ServiceProviderType.MOCK;
  const FOOD_SERVICE: FoodService = FoodServiceFactory.create(SERVICE_PROVIDER_TYPE);
  const SHIPPING_SERVICE: ShoppingService = ShoppingServiceFactory.create(SERVICE_PROVIDER_TYPE);
  const PLANNING_SERVICE: PlanningService = PlanningServiceFactory.create(SERVICE_PROVIDER_TYPE);
  return (
    <BrowserRouter>
      <Header title='' icon={<></>} />
      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="familly" element={<FamillyView />} />
          <Route path="todo" element={<TodoListView />} />
          <Route path="pantry" element={<PantryView foodService={FOOD_SERVICE} shoppingService={SHIPPING_SERVICE} />} />
          <Route path="pantry/food" element={<FoodCreatorView foodService={FOOD_SERVICE} />} />
          <Route path="shopping" element={<ShoppingView shoppingService={SHIPPING_SERVICE} />} />
          <Route path="planning" element={<PlanningView planningService={PLANNING_SERVICE} />} />
          <Route path="planning/:year/:mounth/:day" element={<PlanningView planningService={PLANNING_SERVICE} />} />
          <Route path="meal" element={<MealView />} />
          <Route path="cooking-recipe" element={<CookingRecipeView />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
