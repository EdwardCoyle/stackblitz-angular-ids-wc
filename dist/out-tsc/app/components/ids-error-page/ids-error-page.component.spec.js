import { TestBed } from '@angular/core/testing';
import { IdsErrorPageComponent } from './ids-error-page.component';
describe('IdsErrorPageComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsErrorPageComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsErrorPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-error-page.component.spec.js.map