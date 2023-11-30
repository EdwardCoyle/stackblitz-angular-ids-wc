import { TestBed } from '@angular/core/testing';
import { EventsComponent } from './events.component';
describe('EventsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EventsComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(EventsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=events.component.spec.js.map