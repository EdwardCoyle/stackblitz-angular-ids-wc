import { TestBed } from '@angular/core/testing';
import { IdsPopupMenuComponent } from './ids-popup-menu.component';
describe('IdsPopupMenuComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsPopupMenuComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsPopupMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-popup-menu.component.spec.js.map