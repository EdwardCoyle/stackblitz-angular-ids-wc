import { TestBed } from '@angular/core/testing';
import { IdsPopupComponent } from './ids-popup.component';
describe('IdsPopupComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsPopupComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsPopupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-popup.component.spec.js.map