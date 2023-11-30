import { TestBed } from '@angular/core/testing';
import { IdsCheckboxComponent } from './ids-checkbox.component';
describe('IdsCheckboxComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsCheckboxComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsCheckboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-checkbox.component.spec.js.map