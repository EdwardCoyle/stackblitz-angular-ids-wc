import { TestBed } from '@angular/core/testing';
import { IdsAppMenuComponent } from './ids-app-menu.component';
describe('IdsAppMenuComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsAppMenuComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsAppMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-app-menu.component.spec.js.map