import { TestBed } from '@angular/core/testing';
import { VerticalComponent } from './vertical.component';
describe('VerticalComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [VerticalComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(VerticalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=vertical.component.spec.js.map