import { TestBed } from '@angular/core/testing';
import { IdsMenuComponent } from './ids-menu.component';
describe('IdsMenuComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsMenuComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-menu.component.spec.js.map