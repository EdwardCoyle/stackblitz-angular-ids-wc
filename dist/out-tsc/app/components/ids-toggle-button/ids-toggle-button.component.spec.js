import { TestBed } from '@angular/core/testing';
import { IdsToggleButtonComponent } from './ids-toggle-button.component';
describe('IdsToggleButtonComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsToggleButtonComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsToggleButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-toggle-button.component.spec.js.map