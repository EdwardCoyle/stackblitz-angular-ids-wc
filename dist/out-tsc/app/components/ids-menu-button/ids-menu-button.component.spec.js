import { TestBed } from '@angular/core/testing';
import { IdsMenuButtonComponent } from './ids-menu-button.component';
describe('IdsMenuButtonComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsMenuButtonComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsMenuButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-menu-button.component.spec.js.map