import { TestBed } from '@angular/core/testing';
import { DisabledComponent } from './disabled.component';
describe('DisabledComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DisabledComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(DisabledComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=disabled.component.spec.js.map