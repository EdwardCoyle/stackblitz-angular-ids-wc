import { TestBed } from '@angular/core/testing';
import { IdsCheckboxGroupComponent } from './ids-checkbox-group.component';
describe('IdsCheckboxGroupComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsCheckboxGroupComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsCheckboxGroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-checkbox-group.component.spec.js.map