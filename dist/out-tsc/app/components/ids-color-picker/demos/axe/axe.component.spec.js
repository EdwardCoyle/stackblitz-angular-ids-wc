import { TestBed } from '@angular/core/testing';
import { AxeComponent } from './axe.component';
describe('AxeComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AxeComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(AxeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=axe.component.spec.js.map