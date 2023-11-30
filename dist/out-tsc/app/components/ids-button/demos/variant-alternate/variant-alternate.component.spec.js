import { TestBed } from '@angular/core/testing';
import { VariantAlternateComponent } from './variant-alternate.component';
describe('VariantAlternateComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [VariantAlternateComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(VariantAlternateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=variant-alternate.component.spec.js.map