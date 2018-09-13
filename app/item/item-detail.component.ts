import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { StateService } from "jslib/abstractions/state.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    item: Item;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private stateService: StateService,
    ) { }

    async ngOnInit() {
        const id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
        await this.stateService.save('hello', 'world!');
        console.log('state: ' + (await this.stateService.get<string>('hello')));
    }
}
