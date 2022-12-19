import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import { render } from './render.js';
import ListPresenter from './presenter/list-presenter.js';

const tripFiltersContainer = document.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');

const listPresenter = new ListPresenter({ listContainer: tripEventsContainer });

render(new FilterView(), tripFiltersContainer);
render(new SortView(), tripEventsContainer);

listPresenter.init();
