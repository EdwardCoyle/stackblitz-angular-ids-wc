import { TestBed } from '@angular/core/testing';
import { IdsThemeSwitcherComponent } from './ids-theme-switcher.component';
describe('IdsThemeSwitcherComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsThemeSwitcherComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsThemeSwitcherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-theme-switcher.component.spec.js.map