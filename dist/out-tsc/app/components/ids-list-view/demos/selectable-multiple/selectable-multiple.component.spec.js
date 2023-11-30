import { TestBed } from '@angular/core/testing';
import { SelectableMultipleComponent } from './selectable-multiple.component';
describe('SelectableMultipleComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SelectableMultipleComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(SelectableMultipleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=selectable-multiple.component.spec.js.map