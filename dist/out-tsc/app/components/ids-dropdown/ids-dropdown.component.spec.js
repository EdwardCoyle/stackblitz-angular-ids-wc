import { TestBed } from '@angular/core/testing';
import { IdsDropdownComponent } from './ids-dropdown.component';
describe('IdsDropdownComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsDropdownComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsDropdownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-dropdown.component.spec.js.map