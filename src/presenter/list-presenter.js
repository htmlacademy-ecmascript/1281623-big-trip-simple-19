import AddNewEventView from '../view/add-new-event-view.js';
import EditEventView from '../view/edit-event-view.js';
import EventListView from '../view/event-list-view.js';
import EventView from '../view/event-view.js';
import { render } from '../render.js';

const EVENTS_AMOUNT = 3;

export default class ListPresenter {
  listComponent = new EventListView();

  constructor({ listContainer }) {
    this.listContainer = listContainer;
  }

  init() {
    render(this.listComponent, this.listContainer);
    render(new EditEventView(), this.listComponent.getElement());
    render(new AddNewEventView(), this.listComponent.getElement());

    for (let i = 0; i < EVENTS_AMOUNT; i++) {
      render(new EventView(), this.listComponent.getElement());
    }
  }
}
