import { TestBed } from '@angular/core/testing';
import { LabelStateComponent } from './label-state.component';
describe('LabelStateComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LabelStateComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(LabelStateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=label-state.component.spec.js.map